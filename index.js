const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");
const dotenv = require("dotenv");
const { response } = require("express");

//SET UP
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());
dotenv.config();
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.get("/truyentranh", (req, resp) => {
  const page = req.query.page;
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  const url = `https://baotangtruyen1.com/home?page=${page}`;
  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $("figure", html).each(function () {
        const name = $(this).find(".image a").attr("title");
        const image =
          // $(this).find(".image-item a img").attr("src") ||
          $(this).find(".image a img").attr("data-src");
        const url = $(this).find(".image a").attr("href");
        const slug = String(url).split("/truyen-tranh")[1].replace("/", "");

        thumbnails.push({
          name: name,
          slug: slug,
          url: "https://thanhan-baotang.vercel.app/truyentranh" + "/" + slug,

          image: image,
        });
      });

      $(".pagination", html).each(function () {
        const countPages = $(this).find("li:nth-child(6)").text();

        data.push({
          thumbnails: thumbnails,
          countPages: +countPages,
        });
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category/top-ngay", (req, resp) => {
  const page = req.query.page;
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  const url = `https://baotangtruyen1.com/tim-truyen?status=-1&sort=13&page=${page}`;
  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".image", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find("a").attr("href");
        const image = $(this).find("img").attr("data-src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", ""),
          url:
            "https://thanhan-baotang.vercel.app/truyentranh/" +
            url.split("/truyen-tranh")[1],

          image: image,
        });
      });

      data.push({
        thumbnails: thumbnails,
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category/top-tuan", (req, resp) => {
  const page = req.query.page;
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  const url = `https://baotangtruyen1.com/tim-truyen?status=-1&sort=12&page=${page}`;
  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".image", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find("a").attr("href");
        const image = $(this).find("img").attr("data-src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", ""),
          url:
            "https://thanhan-baotang.vercel.app/truyentranh" +
            url.split("/truyen-tranh")[1],

          image: image,
        });
      });

      data.push({
        thumbnails: thumbnails,
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category/top-thang", (req, resp) => {
  const page = req.query.page;
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  const url = `https://baotangtruyen1.com/tim-truyen?status=-1&sort=11&page=${page}`;
  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".image", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find("a").attr("href");
        const image = $(this).find("img").attr("data-src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", ""),
          url:
            "https://thanhan-baotang.vercel.app/truyentranh" +
            url.split("/truyen-tranh")[1],

          image: image,
        });
      });

      data.push({
        thumbnails: thumbnails,
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category/top-all", (req, resp) => {
  const page = req.query.page;
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  const url = `https://baotangtruyen1.com/tim-truyen?status=-1&sort=10&page=${page}`;
  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".image", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find("a").attr("href");
        const image = $(this).find("img").attr("data-src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", ""),
          url:
            "https://thanhan-baotang.vercel.app/truyentranh" +
            url.split("/truyen-tranh")[1],

          image: image,
        });
      });

      data.push({
        thumbnails: thumbnails,
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category/top-follow", (req, resp) => {
  const page = req.query.page;
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  const url = `https://baotangtruyen1.com/tim-truyen?status=-1&sort=20&page=${page}`;
  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".image", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find("a").attr("href");
        const image = $(this).find("img").attr("data-src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", ""),
          url:
            "https://thanhan-baotang.vercel.app/truyentranh" +
            url.split("/truyen-tranh")[1],

          image: image,
        });
      });

      data.push({
        thumbnails: thumbnails,
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category/top-comment", (req, resp) => {
  const page = req.query.page;
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  const url = `https://baotangtruyen1.com/tim-truyen?status=-1&sort=25&page=${page}`;
  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".image", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find("a").attr("href");
        const image = $(this).find("img").attr("data-src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", ""),
          url:
            "https://thanhan-baotang.vercel.app/truyentranh" +
            url.split("/truyen-tranh")[1],

          image: image,
        });
      });

      data.push({
        thumbnails: thumbnails,
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category/top-truyen-moi", (req, resp) => {
  const page = req.query.page;
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  const url = `https://baotangtruyen1.com/tim-truyen?status=-1&sort=15&page=${page}`;
  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".image", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find("a").attr("href");
        const image = $(this).find("img").attr("data-src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", ""),
          url:
            "https://thanhan-baotang.vercel.app/truyentranh" +
            url.split("/truyen-tranh")[1],

          image: image,
        });
      });

      data.push({
        thumbnails: thumbnails,
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category/top-chapter", (req, resp) => {
  const page = req.query.page;
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  const url = `https://baotangtruyen1.com/tim-truyen?status=-1&sort=30&page=${page}`;
  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".image", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find("a").attr("href");
        const image = $(this).find("img").attr("data-src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", ""),
          url:
            "https://thanhan-baotang.vercel.app/truyentranh" +
            url.split("/truyen-tranh")[1],

          image: image,
        });
      });

      data.push({
        thumbnails: thumbnails,
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category/top-update", (req, resp) => {
  const page = req.query.page;
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  const url = `https://baotangtruyen1.com/tim-truyen?status=-1&sort=0&page=${page}`;
  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".image", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find("a").attr("href");
        const image = $(this).find("img").attr("data-src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", ""),
          url:
            "https://thanhan-baotang.vercel.app/truyentranh" +
            url.split("/truyen-tranh")[1],

          image: image,
        });
      });

      data.push({
        thumbnails: thumbnails,
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category/completing", (req, resp) => {
  const page = req.query.page;
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  const url = `https://baotangtruyen1.com/tim-truyen?status=1&sort=0&page=${page}`;
  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".image", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find("a").attr("href");
        const image = $(this).find("img").attr("data-src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", ""),
          url:
            "https://thanhan-baotang.vercel.app/truyentranh" +
            url.split("/truyen-tranh")[1],

          image: image,
        });
      });

      data.push({
        thumbnails: thumbnails,
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category/completed", (req, resp) => {
  const page = req.query.page;
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  const url = `https://baotangtruyen1.com/tim-truyen?status=2&sort=0&page=${page}`;
  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".image", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find("a").attr("href");
        const image = $(this).find("img").attr("data-src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", ""),
          url:
            "https://thanhan-baotang.vercel.app/truyentranh" +
            url.split("/truyen-tranh")[1],

          image: image,
        });
      });

      data.push({
        thumbnails: thumbnails,
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyentranh/:character", (req, resp) => {
  let url = "https://baotangtruyen1.com/truyen-tranh/" + req.params.character;
  const characters = [];
  const data = [];
  const listChapters = [];
  const actions = [];

  console.log(url);

  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);

      $("article", html).each(function () {
        const name = $(this).find(".title-detail").text();

        const images = $(this).find(".detail-info img").attr("data-src");

        const author = $(this)
          .find(".detail-info .list-info .author p:nth-child(2)")
          .text();

        const status = $(this)
          .find(".detail-info .list-info .status p:nth-child(2)")
          .text();
        const views = $(this)
          .find(".detail-info .list-info li:last-child p:nth-child(2)")
          .text();

        const follow = $(this).find(".detail-info .follow span b").text();

        $(this)
          .find(".detail-info .list-info .kind p a")
          .each(function () {
            const category = $(this).text();
            const href = $(this).attr("href");

            actions.push({
              category: category,

              action: String(href).split("/tim-truyen")[1],
            });
          });

        const description = $(this).find(".detail-content p").text();

        $(".list-chapter > nav > ul > li", html).each(function () {
          const title = $(this).find(".chapter a").text();
          const id = $(this).find(".chapter a").attr("data-id");
          const debut = $(this).find("div:nth-child(2)").text();
          const links = $(this).find(".chapter a").attr("href");

          const nextLinks = String(links).split("/")[4];
          const idLinks = String(links).split("/")[5];
          listChapters.push({
            title: title,
            debut: debut,
            id: id,

            nextLinks: nextLinks,
            idLinks: idLinks,
            demo:
              "https://thanhan-baotang.vercel.app/comic" +
              "/" +
              nextLinks +
              "/" +
              idLinks +
              "/" +
              id,
          });
        });

        characters.push({
          images: images,
          name: name,

          author: author,
          status: status,
          views: views,

          follow: follow,
          actions: actions,
          description: description,
        });
      });

      data.push({
        thumbnails: characters,
        listChapters: listChapters,
      });

      resp.status(200).json(data);
    });
  } catch (err) {
    resp.status(500).json(err);
  }
});

app.get("/comic/:nextLinks/:idLinks/:id", (req, resp) => {
  let url = `https://baotangtruyen1.com/truyen-dich/${req.params.nextLinks}/${req.params.idLinks}/${req.params.id}`;

  console.log(url);

  const images = [];
  const detailChapter = [];
  const allChapters = [];

  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".page-chapter", html).each(function () {
        const image = $(this).find("img").attr("data-src");

        images.push(image);
      });

      $("select option", html).each(function () {
        const title = $(this).text();

        const href = $(this).attr("value");
        const data = String(href).split("/truyen-tranh")[1];
        const newHref = String(data).split("/")[1];
        const nextHref = String(data).split("/")[2];
        const idHref = String(data).split("/")[3];

        allChapters.push({
          title: title,
          newHref: newHref,
          nextHref: nextHref,
          idHref: idHref,
          demo: `https://thanhan-baotang.vercel.app/comic/${newHref}/${nextHref}/${idHref}`,
        });
      });
      detailChapter.push({
        listImages: images,
        selectChapter: allChapters,
      });

      resp.status(200).json(detailChapter);
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/the-loai", (req, resp) => {
  const genres = [];

  try {
    axios(`https://baotangtruyen1.com/home/`).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".dropdown-menu .clearfix .nav li", html).each(function () {
        const titles = $(this).find("a").attr("href");
        const name = $(this).find("a").text();
        genres.push({
          params: titles.split("/tim-truyen")[1].replace("/", ""),
          name: name,
        });
      });

      resp.status(200).json(genres);
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/the-loai/:action", (req, resp) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  let url = `https://baotangtruyen1.com/tim-truyen/${req.params.action}?status=-1&sort=0&page=${page}`;
  console.log(url);

  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $("figure", html).each(function () {
        const name = $(this).find(".image a").attr("title");
        const image =
          // $(this).find(".image-item a img").attr("src") ||
          $(this).find(".image a img").attr("data-src");
        const url = $(this).find(".image a").attr("href");
        const slug = String(url).split("/truyen-tranh")[1].replace("/", "");

        thumbnails.push({
          name: name,
          slug: slug,
          url: "https://thanhan-baotang.vercel.app" + "/" + slug,

          image: image,
        });
      });

      $(".pagination", html).each(function () {
        const countPages = $(this).find("li:nth-child(6)").text();

        data.push({
          thumbnails: thumbnails,
          countPages: +countPages,
        });
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/search/:keyword", (req, resp) => {
  const page = req.query.page;
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  const url = `https://baotangtruyen1.com/tim-truyen?keyword=${req.params.keyword
    .toLowerCase()
    .replace(/\s/g, "+")}&page=${page}`;
  console.log(url);
  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $("figure", html).each(function () {
        const name = $(this).find(".image a").attr("title");
        const image =
          // $(this).find(".image-item a img").attr("src") ||
          $(this).find(".image a img").attr("data-src");
        const url = $(this).find(".image a").attr("href");
        const slug = String(url).split("/truyen-tranh")[1].replace("/", "");

        thumbnails.push({
          name: name,
          slug: slug,
          url: "https://thanhan-baotang.vercel.app/truyentranh" + "/" + slug,

          image: image,
        });
      });

      $(".pagination", html).each(function () {
        const countPages = $(this).find("li:nth-child(6)").text();

        data.push({
          thumbnails: thumbnails,
          countPages: +countPages,
        });
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

//PORT
app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running");
});
