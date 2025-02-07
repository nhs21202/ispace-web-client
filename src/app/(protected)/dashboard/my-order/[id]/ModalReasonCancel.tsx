import { cancelOrder } from "@/api/order/client";
import { App, Form, Input, Modal } from "antd";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  orderId: number;
};

const ModalReasonCancel = ({ isOpen, onClose, onSuccess, orderId }: Props) => {
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onFinish = async (values: { note: string }) => {
    try {
      await cancelOrder(orderId, values);
      message.success("Đơn hàng đã được hủy thành công!");
      onSuccess();
    } catch (error) {
      message.error(`Không thể hủy đơn hàng. Vui lòng thử lại:${error}`);
    }
  };

  return (
    <Modal
      title="Xác nhận hủy đơn hàng"
      open={isOpen}
      onCancel={onClose}
      onOk={form.submit}
      okText="Xác nhận"
      cancelText="Hủy"
      okButtonProps={{ danger: true }}
      modalRender={(modal) => (
        <Form form={form} layout="vertical" onFinish={onFinish}>
          {modal}
        </Form>
      )}
    >
      <p className="mb-4">Bạn có chắc chắn muốn hủy đơn hàng này không?</p>
      <Form.Item label="Lý do hủy đơn hàng" name="note">
        <Input.TextArea rows={4} placeholder="Nhập lý do hủy đơn (tùy chọn)" />
      </Form.Item>
    </Modal>
  );
};

export default ModalReasonCancel;
