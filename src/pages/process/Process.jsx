import { Helmet } from 'react-helmet-async'
import React, { useEffect, useState } from 'react'
import Banner from './sections/Banner'
import Submenu from './sections/Submenu'
import axios from 'axios';
import { PulseLoader } from 'react-spinners';
import { useLocation } from 'react-router-dom';

export default function Process({ host, websiteTitle }) {
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState([]);
  const [submenu, setSubmenu] = useState([]);
  const location = useLocation()
  const filterTitle = websiteTitle.filter((website) => {
    const matchesUrl = location.pathname ? website.cate_url === location.pathname.replace("/", "") : true;
    return matchesUrl
  })

  async function getPortfolio() {
    const response = await axios.get(`${host}api/backoffice/v1/process/read`);
    const banner = response.data.banner;
    const submenu = response.data.submenu;
    setBanner(banner);
    setSubmenu(submenu);
  }

  useEffect(() => {
    getPortfolio().then(() => setLoading(false));
  }, []);

  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>{filterTitle[0]?.cate_description || "ขั้นตอนการทำงาน"}</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
          data-rh="true"
        />
        <link rel="canonical" href="/process" />
      </Helmet>
      {!loading ? (
        <>
          <section id="banner">
            <Banner host={host} banner={banner} />
          </section>
          <section id="submenu">
            <Submenu host={host} submenu={submenu} />
          </section>
        </>
      ) : (
        <div className="w-full h-[calc(100vh-70px)] flex justify-center items-center">
          <PulseLoader color="#004500" />
        </div>
      )}
    </main>
  )
}
