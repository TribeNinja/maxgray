import React, { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import styles from "../styles/Artwork.module.scss";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const Artwork = () => {
  const [toggler, setToggler] = useState<boolean>(false);
  const [lightbox, setLightbox] = useState<number>();
  const imageArray = [
    "https://dl.dropboxusercontent.com/s/mwq4nxk43yhxzl0/o_O.png",
    "https://dl.dropboxusercontent.com/s/gfi3dx5plnmfhvq/o_O.png",
    "https://dl.dropboxusercontent.com/s/2eeg257zsatihis/o_O.png",
    "https://dl.dropboxusercontent.com/s/27u5kqf35ncrq2z/o_O.png",
    "https://dl.dropboxusercontent.com/s/a158qis73nykrnb/o_O.png",
    "https://dl.dropboxusercontent.com/s/c28muzgo3ui5v65/o_O.png",
    "https://dl.dropboxusercontent.com/s/er8fqlghpo14mlz/o_O.png",
    "https://dl.dropboxusercontent.com/s/xxom9li3dctq35p/o_O.png",
    "https://dl.dropboxusercontent.com/s/n93t0bk1w2lm4hg/o_O.png",
    "https://dl.dropboxusercontent.com/s/bidj4cqpa6u7s13/o_O.png",
    "https://dl.dropboxusercontent.com/s/aysy0a3k2y07xjv/o_O.png",
    "https://dl.dropboxusercontent.com/s/kj66r2rzg2et6ta/o_O.png",
    "https://dl.dropboxusercontent.com/s/eghvyugnl6krfke/o_O.png",
    "https://dl.dropboxusercontent.com/s/rmbuk18k65et0lp/o_O.png",
    "https://dl.dropboxusercontent.com/s/1i5y7qemcnzhpts/o_O.png",
    "https://dl.dropboxusercontent.com/s/o62987d5g60mra4/o_O.png",
    "https://dl.dropboxusercontent.com/s/f2kkmbn083rrhhp/o_O.png",
    "https://dl.dropboxusercontent.com/s/qrwldhzbvo9kjyc/o_O.png",
    "https://dl.dropboxusercontent.com/s/n0br4j3sles461i/o_O.png",
    "https://dl.dropboxusercontent.com/s/hqv9z54ncyfq026/o_O.png",
    "https://dl.dropboxusercontent.com/s/yqdqc4aeg1zc4qt/o_O.png",
    "https://dl.dropboxusercontent.com/s/xr8szqda0hin5tn/o_O.png",
    "https://dl.dropboxusercontent.com/s/68pl6kpsg0vxz6h/o_O.png",
    "https://dl.dropboxusercontent.com/s/n10v9un6065jh7u/o_O.png",
    "https://dl.dropboxusercontent.com/s/zq5a2g8s1n6950u/o_O.png",
    "https://dl.dropboxusercontent.com/s/pgq6bpd2fc952ay/o_O.png",
    "https://dl.dropboxusercontent.com/s/ot7542xyjlrvf3c/o_O.png",
    "https://dl.dropboxusercontent.com/s/2ercd5f4zc4p7cf/o_O.png",
    "https://dl.dropboxusercontent.com/s/9lsqrmyl1yasfc7/o_O.png",
    "https://dl.dropboxusercontent.com/s/4ukzgc9znt4fxtg/o_O.png",
    "https://dl.dropboxusercontent.com/s/my1f9e0k8irv7lo/o_O.png",
    "https://dl.dropboxusercontent.com/s/9r8xkuejo181140/o_O.png",
    "https://dl.dropboxusercontent.com/s/ca4vo6afh48jbm7/o_O.png",
    "https://dl.dropboxusercontent.com/s/od8mog12sqtij0a/o_O.png",
    "https://dl.dropboxusercontent.com/s/cq4jttfmpz20uxx/o_O.png",
    "https://dl.dropboxusercontent.com/s/bvyf2hfsmefg8hd/o_O.png",
    "https://dl.dropboxusercontent.com/s/bbtlpu55vn8hknu/o_O.png",
    "https://dl.dropboxusercontent.com/s/2jsc7vlnnabrcy0/o_O.png",
    "https://dl.dropboxusercontent.com/s/dx9x6tv3c8ubwu7/o_O.png",
    "https://dl.dropboxusercontent.com/s/ff7vlfayh0yag1g/o_O.png",
    "https://dl.dropboxusercontent.com/s/uhuyw1s6wpp4omj/o_O.png",
    "https://dl.dropboxusercontent.com/s/t36oesau0zxa3hl/o_O.png",
    "https://dl.dropboxusercontent.com/s/sjgi8is70qohuob/o_O.png",
    "https://dl.dropboxusercontent.com/s/ea8a7tcqc6jlmwt/o_O.png",
    "https://dl.dropboxusercontent.com/s/56f32lwvn8hchfv/o_O.png",
    "https://dl.dropboxusercontent.com/s/t18hvuykplqiuxu/o_O.png",
    "https://dl.dropboxusercontent.com/s/30e7abjs3wtqdra/o_O.png",
    "https://dl.dropboxusercontent.com/s/s3yh6nvny1klgx3/o_O.png",
    "https://dl.dropboxusercontent.com/s/e37166v851ptfij/o_O.png",
    "https://dl.dropboxusercontent.com/s/1zcqtpueg073uil/o_O.png",
    "https://dl.dropboxusercontent.com/s/6te4hbuandhksry/o_O.png",
    "https://dl.dropboxusercontent.com/s/uswvncd2qpxlp38/o_O.png",
    "https://dl.dropboxusercontent.com/s/q4hoce3g9ktv0yg/o_O.png",
    "https://dl.dropboxusercontent.com/s/jcxg8vt2qvg54lr/o_O.png",
    "https://dl.dropboxusercontent.com/s/iayiojz0yamckq6/o_O.png",
    "https://dl.dropboxusercontent.com/s/abhgslmywzp5hmg/o_O.png",
    "https://dl.dropboxusercontent.com/s/y8swng1j9xwqt7e/o_O.png",
    "https://dl.dropboxusercontent.com/s/xlolp2mjsugd7hz/o_O.png",
    "https://dl.dropboxusercontent.com/s/pyixjd7b5a88lxn/o_O.png",
    "https://dl.dropboxusercontent.com/s/rnn8ik14jvoaxlq/o_O.png",
    "https://dl.dropboxusercontent.com/s/nm451crjq4nkskf/o_O.png",
    "https://dl.dropboxusercontent.com/s/pgbclgy2paktliv/o_O.png",
    "https://dl.dropboxusercontent.com/s/0guxyn8kfj3hm3i/o_O.png",
    "https://dl.dropboxusercontent.com/s/psq7an3r4ow50aj/o_O.png",
    "https://dl.dropboxusercontent.com/s/ggpmtlpdy35vqfp/o_O.png",
    "https://dl.dropboxusercontent.com/s/diie9mupxpoqkr4/o_O.png",
    "https://dl.dropboxusercontent.com/s/i9v6mhob8rz8ie9/o_O.png",
    "https://dl.dropboxusercontent.com/s/t4i84sipjfldxs2/o_O.png",
    "https://dl.dropboxusercontent.com/s/7g9lrtf6oqwrucd/o_O.png",
    "https://dl.dropboxusercontent.com/s/s7bubjlphnqx1n9/o_O.png",
    "https://dl.dropboxusercontent.com/s/2fem35g5pqueu70/o_O.png",
    "https://dl.dropboxusercontent.com/s/lfzevzyzjpg1hxo/o_O.png",
    "https://dl.dropboxusercontent.com/s/nk0oqsw7w94tdsp/o_O.png",
    "https://dl.dropboxusercontent.com/s/nsw07v5nma7u032/o_O.png",
    "https://dl.dropboxusercontent.com/s/1s90sqxy0hhlrpn/o_O.png",
    "https://dl.dropboxusercontent.com/s/ezazu5i1qfuaa0r/o_O.png",
    "https://dl.dropboxusercontent.com/s/g04v7bif18ezyiz/o_O.png",
    "https://dl.dropboxusercontent.com/s/doqxrugzadx6evl/o_O.png",
    "https://dl.dropboxusercontent.com/s/g6sj6bpuij18cp1/o_O.png",
    "https://dl.dropboxusercontent.com/s/53te6u1mny538nd/o_O.png",
    "https://dl.dropboxusercontent.com/s/wwm9hy7xu8qvnv2/o_O.png",
    "https://dl.dropboxusercontent.com/s/ajl7ekhlrg75ktz/o_O.png",
    "https://dl.dropboxusercontent.com/s/yo0eztrow75b2qp/o_O.png",
    "https://dl.dropboxusercontent.com/s/17suajojrnqyivr/o_O.png",
    "https://dl.dropboxusercontent.com/s/jgzt1p8desqizns/o_O.png",
    "https://dl.dropboxusercontent.com/s/bqi9c110m94hcsc/o_O.png",
    "https://dl.dropboxusercontent.com/s/au71ue91r3299mk/o_O.png",
    "https://dl.dropboxusercontent.com/s/1ad40acoxzbt5nm/o_O.png",
    "https://dl.dropboxusercontent.com/s/bibu0zj5q0fjky5/o_O.png",
    "https://dl.dropboxusercontent.com/s/mq9ofd4cz23i6g7/o_O.png",
    "https://dl.dropboxusercontent.com/s/mab7ntb4m4dw909/o_O.png",
    "https://dl.dropboxusercontent.com/s/s5of8422kx564yi/o_O.png",
    "https://dl.dropboxusercontent.com/s/khuzrzrl9cci7kw/o_O.png",
    "https://dl.dropboxusercontent.com/s/uoza98qaepw69pb/o_O.png",
    "https://dl.dropboxusercontent.com/s/9x0ky92k2zomoy3/o_O.png",
    "https://dl.dropboxusercontent.com/s/ggqttgwve1ukk6m/o_O.png",
    "https://dl.dropboxusercontent.com/s/u526daq1nkuwn1i/o_O.png",
    "https://dl.dropboxusercontent.com/s/vddpa7ng9hxgfdo/o_O.png",
    "https://dl.dropboxusercontent.com/s/afhcoxtcaybmwve/o_O.png",
    "https://dl.dropboxusercontent.com/s/heq956qmujq6x1g/o_O.png",
    "https://dl.dropboxusercontent.com/s/8mrtxzh3m4lg92c/o_O.png",
    "https://dl.dropboxusercontent.com/s/yqneowzmuhre7m4/o_O.png",
    "https://dl.dropboxusercontent.com/s/v0dqwidn639teai/o_O.png",
    "https://dl.dropboxusercontent.com/s/hma78elbxj95am3/o_O.png",
    "https://dl.dropboxusercontent.com/s/q7tul4y0wxphmnh/o_O.png",
    "https://dl.dropboxusercontent.com/s/n7by80ohps68o37/o_O.png",
    "https://dl.dropboxusercontent.com/s/i13xq5lmeqti81t/o_O.png",
    "https://dl.dropboxusercontent.com/s/arhnj9yysui2mra/o_O.png",
    "https://dl.dropboxusercontent.com/s/1qw2da4uvg5q51x/o_O.png",
    "https://dl.dropboxusercontent.com/s/2wf2xx2lrnpja0u/o_O.png",
    "https://dl.dropboxusercontent.com/s/tvzst02idc8287f/o_O.png",
    "https://dl.dropboxusercontent.com/s/b89b0d6gzf8411d/o_O.png",
    "https://dl.dropboxusercontent.com/s/i59xqgztpk0r1df/o_O.png",
    "https://dl.dropboxusercontent.com/s/simlvxm4o025cei/o_O.png",
    "https://dl.dropboxusercontent.com/s/9f7d7go6x03ktar/o_O.png",
    "https://dl.dropboxusercontent.com/s/l5sk0dcyyiynqk9/o_O.png",
    "https://dl.dropboxusercontent.com/s/cjpyvimbprqn10b/o_O.png",
    "https://dl.dropboxusercontent.com/s/ddf8oq2h7hwgnqn/o_O.png",
    "https://dl.dropboxusercontent.com/s/9ptx7jun36qrs2l/o_O.png",
    "https://dl.dropboxusercontent.com/s/7ila8uex09uu1da/o_O.png",
    "https://dl.dropboxusercontent.com/s/2lh9fv132gnz85g/o_O.png",
    "https://dl.dropboxusercontent.com/s/qacqntqrql5ukh4/o_O.png",
    "https://dl.dropboxusercontent.com/s/rgmbcgil7yqw5v1/o_O.png",
    "https://dl.dropboxusercontent.com/s/1lx38otxyta9u46/o_O.png",
    "https://dl.dropboxusercontent.com/s/lausyjvj8w8pexv/o_O.png",
    "https://dl.dropboxusercontent.com/s/yemp7pm3jangqt9/o_O.png",
    "https://dl.dropboxusercontent.com/s/bfj9l4f181gm08d/o_O.png",
    "https://dl.dropboxusercontent.com/s/4e9mcle69sxr2is/o_O.png",
    "https://dl.dropboxusercontent.com/s/bzfwl0tk4indo26/o_O.png",
    "https://dl.dropboxusercontent.com/s/wxyyglhw6qwod5i/o_O.png",
    "https://dl.dropboxusercontent.com/s/4cmu1gj1ft3x5qd/o_O.png",
    "https://dl.dropboxusercontent.com/s/0s9se0fryzqr3lv/o_O.png",
    "https://dl.dropboxusercontent.com/s/ryt61ljtssueoj3/o_O.png",
    "https://dl.dropboxusercontent.com/s/vxq525lwkw84opv/o_O.png",
    "https://dl.dropboxusercontent.com/s/yycl9njiymamemx/o_O.png",
    "https://dl.dropboxusercontent.com/s/xi1nu6l8y2atb1p/o_O.png",
    "https://dl.dropboxusercontent.com/s/2kx99fevopucliv/o_O.png",
    "https://dl.dropboxusercontent.com/s/lzw14e7lyfk5u4w/o_O.png",
    "https://dl.dropboxusercontent.com/s/9vf9fml23xirrxl/o_O.png",
    "https://dl.dropboxusercontent.com/s/8sx1q5ji9b9f676/o_O.png",
    "https://dl.dropboxusercontent.com/s/5knoxec29ir6r24/o_O.png",
    "https://dl.dropboxusercontent.com/s/vwz3syptyt1b0jv/o_O.png",
    "https://dl.dropboxusercontent.com/s/9jswqlfljlnf2wd/o_O.png",
    "https://dl.dropboxusercontent.com/s/kdyequq9d3xxfl1/o_O.png",
    "https://dl.dropboxusercontent.com/s/088cs7x315qdq0m/o_O.png",
    "https://dl.dropboxusercontent.com/s/rvry9mug9xx3ep4/o_O.png",
    "https://dl.dropboxusercontent.com/s/jbzsi1knol4alsv/o_O.png",
    "https://dl.dropboxusercontent.com/s/woo8ti53d65ij5c/o_O.png",
    "https://dl.dropboxusercontent.com/s/9iyhzz0t1ru46mn/o_O.png",
    "https://dl.dropboxusercontent.com/s/noyazx6dseklnq9/o_O.png",
    "https://dl.dropboxusercontent.com/s/nqm120rsy8kvbe9/o_O.png",
    "https://dl.dropboxusercontent.com/s/95p8nraq9twjv3r/o_O.png",
    "https://dl.dropboxusercontent.com/s/rx0l0ltoia6mri7/o_O.png",
    "https://dl.dropboxusercontent.com/s/76837vq1nn711z7/o_O.png",
    "https://dl.dropboxusercontent.com/s/l9lbk37fpysersv/o_O.png",
    "https://dl.dropboxusercontent.com/s/583tr6stxybzqcc/o_O.png",
    "https://dl.dropboxusercontent.com/s/z0lsln50y8p1xbp/o_O.png",
  ];
  return (
    <>
      <Navbar />
      <main className={styles.artworkContainer}>
        {/* BANNER */}
        <div className={styles.banner}>
          <h1>Artworks</h1>
        </div>
        {/* GALLERY */}
        <div className={styles.galleryContainer}>
          {imageArray.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  alt={item}
                  src={item}
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  onClick={() => {
                    setToggler(!toggler);
                    setLightbox(index);
                  }}
                />
              </div>
            );
          })}
        </div>
        <FsLightbox
          toggler={toggler}
          sources={imageArray}
          sourceIndex={lightbox}
        />
      </main>
      <Footer />
    </>
  );
};

export default Artwork;
