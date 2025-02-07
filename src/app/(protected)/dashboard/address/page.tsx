"use client";

import { CustomerAddress } from "@/utilities/types/customer.type";
import ModalAddAddress from "./ModalAddAddress";
import ModalEditAddress from "./ModalEditAddress";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import AddressCard from "./AddressCard";
import { App, Button, Empty, Spin } from "antd";
import { updateUserMe } from "@/api/auth/client";
import { getErrorMessage } from "@/utilities/helper/common.helper";
import { DEFAULT_ERROR_MESSAGE } from "@/utilities/constant/string";

const AddressPage = () => {
  const [editModalState, setEditModalState] = useState<{
    open: boolean;
    data?: CustomerAddress;
  }>({ open: false });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { userInfo, refreshUserInfo } = useAuth();
  const { message, modal } = App.useApp();

  const showDeleteConfirmModal = (addressId: number) => {
    modal.confirm({
      title: "Xác nhận xóa",
      content: "Bạn có chắc chắn muốn xóa địa chỉ này không?",
      okText: "Xác nhận",
      okType: "danger",
      cancelText: "Hủy",
      onOk: async () => {
        try {
          setIsLoading(true);
          const updatedAddressList =
            userInfo?.customerAddresses.filter(
              (address) => address.id !== addressId,
            ) || [];
          await updateUserMe({ customerAddresses: updatedAddressList });
          await refreshUserInfo();
          message.success("Xóa địa chỉ thành công");
        } catch (error) {
          message.error(getErrorMessage(error) || DEFAULT_ERROR_MESSAGE);
        } finally {
          setIsLoading(false);
        }
      },
    });
  };

  const handleOpenEditModal = (address: CustomerAddress) => {
    setEditModalState({ open: true, data: address });
  };

  return (
    <Spin spinning={isLoading} size="large">
      <div className="mx-auto w-full rounded-xl border p-10">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-bold">Danh sách địa chỉ</h2>
          <Button type="primary" onClick={() => setIsAddModalOpen(true)}>
            Thêm địa chỉ
          </Button>
        </div>

        <div className="grid max-h-96 gap-3 overflow-y-auto overflow-x-hidden">
          {userInfo?.customerAddresses.map((address) => (
            <AddressCard
              key={address.id}
              addressInfo={address}
              onClickEditBtn={handleOpenEditModal}
              onClickDeleteBtn={() => showDeleteConfirmModal(address.id)}
            />
          ))}
          {!userInfo?.customerAddresses?.length && (
            <Empty description="Không có địa chi" />
          )}
        </div>

        <ModalEditAddress
          isOpen={editModalState.open}
          addressList={userInfo?.customerAddresses || []}
          selectedAddress={editModalState.data}
          onClose={() => setEditModalState({ open: false })}
          onSuccess={() => refreshUserInfo()}
        />
        <ModalAddAddress
          isOpen={isAddModalOpen}
          addressList={userInfo?.customerAddresses || []}
          onClose={() => setIsAddModalOpen(false)}
          onSuccess={() => refreshUserInfo()}
        />
      </div>
    </Spin>
  );
};

export default AddressPage;
