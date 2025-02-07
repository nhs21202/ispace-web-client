"use client";

import { getOrderList } from "@/api/order/client";
import { qs } from "@/utilities/helper/search.helper";
import { vndString } from "@/utilities/helper/string.helper";
import { formatDate } from "@/utilities/helper/time.helper";
import { ORDER_STATUS, OrderListItem } from "@/utilities/types/order.type";
import { Button, Empty, Pagination, Spin, Tabs } from "antd";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import OrderStatusLabel from "./OrderStatusLabel";
import PaymentStatusBadge from "./PaymentStatusBadge";
import { ListResponse } from "@/utilities/types/common.type";

const LIMIT = 3;

const OrderPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderList, setOrderList] = useState<ListResponse<OrderListItem>>({
    data: [],
    total: 0,
    pages: 0,
  });
  const [activeStatus, setActiveStatus] = useState<ORDER_STATUS>(
    ORDER_STATUS.ALL,
  );
  const [pagination, setPagination] = useState({ page: 1 });

  const fetchOrderList = useCallback(
    async (status: ORDER_STATUS) => {
      setIsLoading(true);
      const filter = {
        search: qs.compare(
          "status",
          status !== ORDER_STATUS.ALL ? status : null,
          "=",
        ),

        order: qs.order('createdAt', 'DESC'),
      };
      const data = await getOrderList({
        limit: LIMIT,
        page: pagination.page,
        ...filter,
      });
      setOrderList(data);
      setIsLoading(false);
    },
    [pagination.page],
  );

  useEffect(() => {
    fetchOrderList(activeStatus);
  }, [activeStatus, fetchOrderList]);

  const tabItems = [
    { key: ORDER_STATUS.ALL, label: "Tất cả" },
    { key: ORDER_STATUS.NEW, label: "Đang xác nhận" },
    { key: ORDER_STATUS.PROCESSING, label: "Đang xử lý" },
    { key: ORDER_STATUS.IN_TRANSIT, label: "Đang giao hàng" },
    { key: ORDER_STATUS.COMPLETED, label: "Hoàn thành" },
    { key: ORDER_STATUS.CANCELLED, label: "Đã hủy" },
  ];

  return (
    <div className="w-full overflow-hidden px-3">
      <Tabs
        defaultActiveKey={ORDER_STATUS.ALL}
        onChange={(key) => {
          setActiveStatus(key as ORDER_STATUS);
          setPagination({ page: 1 });
        }}
        items={tabItems.map((tab) => ({
          key: tab.key,
          label: tab.label,
          children: (
            <div className="flex flex-col gap-3">
              {!isLoading && orderList.data?.length > 0 ? (
                <div className="grid gap-2">
                  {orderList?.data.map((order) => (
                    <div key={order.id} className="rounded border">
                      <div className="flex flex-wrap justify-between border-b p-3">
                        <div className="flex items-center gap-3">
                          Đơn {order.code}{" "}
                          <PaymentStatusBadge
                            paymentStatus={order.deliveryInfo.paymentStatus}
                          />
                        </div>
                        <p className="text-md ml-auto font-bold">
                          {vndString(order.lastPrice)}
                        </p>
                      </div>
                      <div className="p-3">
                        <p className="text-sm text-slate-500">
                          {formatDate(order.createdAt, "DD/MM/YYYY HH:mm")}
                        </p>

                        <div className="my-3 flex justify-between">
                          <div>
                            <div className="flex gap-2">
                              Trạng thái:{" "}
                              <OrderStatusLabel orderStatus={order.status} />
                            </div>
                            <p>
                              Số lượng:{" "}
                              {order.orderDetails?.reduce(
                                (all, order) => all + order.quantity,
                                0,
                              )}{" "}
                              sản phẩm
                            </p>
                          </div>
                          <Link
                            href={`/dashboard/my-order/${order.id}`}
                            className="flex-shrink-0"
                          >
                            <Button type="primary">Xem chi tiết</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-center py-3">
                    <Pagination
                      current={pagination.page}
                      onChange={(page) => setPagination({ page })}
                      pageSize={LIMIT}
                      total={orderList.total}
                      showSizeChanger={false}
                      className="mt-3"
                    />
                  </div>
                </div>
              ) : (
                <Empty
                  description={
                    isLoading ? <Spin spinning /> : "Không có đơn hàng nào"
                  }
                  className="mt-10"
                />
              )}
            </div>
          ),
        }))}
      ></Tabs>
    </div>
  );
};

export default OrderPage;
