import Head from "next/head";
import AV from "leancloud-storage";
import dynamic from "next/dynamic";

import styles from "./index.module.scss";
import Layout from "src/components/admin/Layout";

function AdminHome() {
  return (
    <Layout>
      <div className='_admin_body_section_block'>message</div>
    </Layout>
  );
}

export default AdminHome;
