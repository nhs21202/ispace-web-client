import { Modal, Tabs } from "antd";
import React, { useEffect } from "react";
import LoginForm from "../CommonForm/LoginForm";
import RegisterForm from "../CommonForm/RegisterForm";
import BlockPlaceholder from "../BlockPlaceholder";
import Image from "next/image";
import { WebSettingsType } from "@/utilities/types/settings.type";

type Props = {
  open: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
  webInfos?: WebSettingsType | null;
};

enum TAB {
  LOGIN = "login",
  REGISTER = "register",
}

const ModalAuth = ({ open, onClose, onLoginSuccess, webInfos }: Props) => {
  const [activeForm, setActiveForm] = React.useState<TAB>(TAB.LOGIN);

  useEffect(() => {
    if (open) {
      setActiveForm(TAB.LOGIN);
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      onCancel={onClose}
      footer={null}
      closable={false}
      maskClosable
    >
      <div className="flex items-center justify-center">
        {webInfos?.SITE_SETTING?.logoHeader?.src ? (
          <Image
            src={webInfos?.SITE_SETTING?.logoHeader?.src}
            className="h-36 object-contain"
            alt="logo"
            height={webInfos?.SITE_SETTING?.logoHeader?.height || 400}
            width={webInfos?.SITE_SETTING?.logoHeader?.width || 400}
          />
        ) : (
          <BlockPlaceholder text="logo" className="h-10 w-40" />
        )}
      </div>
      <Tabs
        activeKey={activeForm}
        centered
        onChange={(key) => setActiveForm(key as TAB)}
        tabBarStyle={{ fontWeight: 600 }}
        items={[
          {
            key: TAB.LOGIN,
            label: "Đăng nhập",
            children: (
              <div>
                <LoginForm onSuccess={onLoginSuccess} />
                <div className="mt-4 flex items-center justify-center">
                  <p>
                    Chưa có tài khoản?{" "}
                    <span
                      className="cursor-pointer font-bold italic hover:underline"
                      onClick={() => setActiveForm(TAB.REGISTER)}
                    >
                      Đăng ký
                    </span>{" "}
                    ngay
                  </p>
                </div>
              </div>
            ),
          },
          {
            key: TAB.REGISTER,
            label: "Đăng ký",
            children: (
              <RegisterForm onSuccess={() => setActiveForm(TAB.LOGIN)} />
            ),
          },
        ]}
      ></Tabs>
    </Modal>
  );
};

export default ModalAuth;
