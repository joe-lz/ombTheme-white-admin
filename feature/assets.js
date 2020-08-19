import Head from "next/head";
import AV from "leancloud-storage";
import dynamic from "next/dynamic";

import styles from "./index.module.scss";
import Layout from "src/components/admin/Layout";
import Upload from "src/components/admin/Upload";

function AdminHome() {
  return (
    <Layout>
      <p className="_admin_body_section_title">素材管理</p>
      <Upload />
    </Layout>
  );
}

export default AdminHome;
