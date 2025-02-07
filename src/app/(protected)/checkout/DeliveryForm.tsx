import { useAuth } from "@/contexts/AuthContext";
import { PHONE_REGEX } from "@/utilities/constant/regex";
import { CustomerInfo } from "@/utilities/types/user.type";
import { Form, Input, Radio, Select, Space } from "antd";
import { uniqBy } from "lodash";
import React, { useMemo } from "react";

type Props = {
  paymentMethodOptions: { value: string | number; label: string }[] | undefined;
  handleChangeAddress: (
    value: string | number,
    options:
      | { value?: string | number; raw?: CustomerInfo | undefined }
      | { value?: string | number; raw?: CustomerInfo | undefined }[]
      | undefined,
  ) => void;
};

const UserInformationForm = ({
  paymentMethodOptions,
  handleChangeAddress,
}: Props) => {
  const { userInfo } = useAuth();

  const addressOptions = useMemo(() => {
    const list: {
      label: React.ReactNode;
      value: string | number | undefined;
    }[] =
      uniqBy(userInfo?.customerAddresses, "id")?.map((address) => ({
        label: (
          <div>
            <p className="font-bold">
              {address?.name} - {address?.phone}
            </p>
            <p className="text-sm text-gray-500">{address?.address}</p>
          </div>
        ),
        value: address?.id,
        raw: address,
      })) || [];

    return list.concat([
      {
        label: <p className="font-bold text-blue-500">Thêm địa chỉ mới</p>,
        value: "pickOther",
      },
    ]);
  }, [userInfo?.customerAddresses]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <Form.Item
          className="col-span-2"
          name={"address"}
          label="Địa chỉ"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Chọn hoặc nhập địa chỉ mới"
            showSearch
            options={addressOptions}
            onChange={handleChangeAddress}
            size="large"
            // @ts-expect-error remove auto-complete suggestion from chrome
            autoComplete="one-time-code"
          />
        </Form.Item>
        <Form.Item
          name={"name"}
          label="Họ và tên"
          rules={[{ required: true, whitespace: true }]}
        >
          <Input placeholder="Họ và tên" size="large" />
        </Form.Item>
        <Form.Item
          name={"phone"}
          label="Số điện thoại"
          rules={[
            { required: true, message: "Vui lòng nhập số điện thoại" },
            {
              pattern: PHONE_REGEX,
              message: "Số điện thoại không hợp lệ!",
            },
          ]}
        >
          <Input size="large" placeholder="Số điện thoại" />
        </Form.Item>
      </div>

      <Form.Item name={"note"} label="Ghi chú" className="col-span-2">
        <Input.TextArea rows={4} placeholder="Nhập ghi chú" size="large" />
      </Form.Item>
      <div>
        <h2 className="mb-4 text-xl font-semibold uppercase text-[#6D6A6A]">
          Phương thức thanh toán
        </h2>
        <Form.Item
          name={"paymentMethodId"}
          rules={[
            {
              required: true,
              message: "Vui lòng chọn phương thức thanh toán",
            },
          ]}
        >
          <Radio.Group>
            <Space direction="vertical">
              {paymentMethodOptions?.map((item) => (
                <Radio value={item.value} key={item.value}>
                  {item.label}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </Form.Item>
      </div>
    </div>
  );
};

export default UserInformationForm;
