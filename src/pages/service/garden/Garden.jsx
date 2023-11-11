import { Helmet } from "react-helmet-async";
import React from "react";
import Banner from "./sections/Banner";
import Lists from "./sections/Lists";

export default function Garden() {
  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | ออกแบบจัดสวน จัดประดับตกแต่งไม้ดอกไม้ประดับ</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
        />
        <link rel="canonical" href="/service/garden" />
      </Helmet>

      <section id="banner">
        <Banner />
      </section>
      <section id="lists">
        <Lists />
      </section>
    </main>
  );
}