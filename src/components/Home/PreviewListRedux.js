const initialState = {
    loading: true,
    error: false,
    articleList: [
        {
          "id": 1,
          "title": "Angular2 中那些我看不懂的地方",
          "description": "博客停更了近 3 个月，实在是愧对很多在微博上推荐的同学。因为最近大部分时间都投入在公司里一个比较复杂的项目中，直到本周才算正式发布，稍得解脱。 说这个项目复杂，不仅是因为需求设计复杂，更是因为在这个[...]",
          "date": "2016-04-17"
        },
        {
          "id": 2,
          "title": "记一次使用 git bisect 快速定位 bug 的过程",
          "description": "前一阵子跟三个同事一起合作开发了基于 Redux 的单页应用，我负责的部分完成的比较早，所有功能测试通过之后代码就没有改动过。 结果项目上线后不久接到反馈说我开发的某个功能突然用不了了，我自己一试果然[...]",
          "date": "2016-01-19"
        },
        {
          "id": 3,
          "title": "Lets Encrypt 花三分钟免费接入ssl证书",
          "description": "很久很久以前我还在当个人站长的时候，就一直琢磨着给网站买个 ssl 证书，这样用户访问的时候浏览器上的小绿锁能给人一种非常安全的印象。然而导致我最终没有上 https 的原因有：[...]",
          "date": "2016-01-02"
        },
        {
          "id": 4,
          "title": "Redux 在实践中的一些问题及思考",
          "description": "React 绝对是 2015 年前端领域的关键词，基于 React 的 Flux 架构也被越来越多的人所熟识。然而 Flux 作为一套架构思想而不是框架让许多开发者在实践中摸不着头脑，因此社区里也诞生[...]",
          "date": "2015-12-12"
        },
        {
          "id": 5,
          "title": "setState 之后发生了什么 —— 浅谈 React 中的 Transaction",
          "description": "本文系对 深入理解 React 的 batchUpdate 机制 的更新，根据 React v0.14 版源码添加并修改了部分内容。同时增加了一张看起来并不容易理解的示意图。 之前在我的博客里有[...]",
          "date": "2015-10-25"
        }
      ]
};

const LOAD_ARTiCLES = 'LOAD_ARTiCLES';
const LOAD_ARTiCLES_SUCCESS = 'LOAD_ARTiCLES_SUCCESS';
const LOAD_ARTiCLES_ERROR = 'LOAD_ARTiCLES_ERROR';

export function loadArticles() {
    return {
        types: [LOAD_ARTiCLES, LOAD_ARTiCLES_SUCCESS, LOAD_ARTiCLES_ERROR],
        // url: '/api/articles.json',
    };
}

function previewList(state = initialState, action) {
    switch (action.type) {
        case LOAD_ARTiCLES: {
            return {
                ...state,
                loadding: true,
                error: false
            };
        }
        case LOAD_ARTiCLES_SUCCESS: {
            return {
                ...state,
                loadding: false,
                error: false,
                articleList: action.payload
            }
        }
        case LOAD_ARTiCLES_ERROR: {
            return {
                ...state,
                loadding: false,
                error: true
            }
        }
        default:
            return state
    }
}

export default previewList;


