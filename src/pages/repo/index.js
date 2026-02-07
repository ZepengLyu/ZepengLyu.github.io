import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import "../../styles/components.css"

const repoItems=[
    { title: "三维装箱遗传算法实现",
      excerpt: "在美赛 2019B (使用无人机救援波多黎各) 中，其中一个环节是将所需要的药品等物质装入集装箱，这里需要使用三维装箱算法获得最佳的装箱方案",
      link:"https://blog.csdn.net/weixin_43388483/article/details/122748513?spm=1001.2014.3001.5501",
      linkAlt:"Matlab 三维装箱遗传算法实现",
    },
    { title: "基因集显著判断方法的实现",
      excerpt: "笔者的本科毕业论文是关于基因集显著方法的横向比对，这里提供了 GSVA 方法的复现",
      link:"https://cloud.tencent.com.cn/developer/article/2288789",
      linkAlt:"R GSVA方法的复现",
    },
    { title: "量子抵抗与零知识的登陆系统",
      excerpt: "笔者的硕士毕业项目是关于设计一个量子抵抗和零知识的登陆系统",
      link:"https://github.com/ZepengLyu/login-system",
      linkAlt:"C 量子抵抗与零知识的登陆系统",
    },
    { title: "naiveCoin 项目的改进",
      excerpt: "笔者的课程项目 (团队)，基于 naiveCoin 项目的改进",
      link:"",
      linkAlt:"JavaScript naiveCoin",
    },
    { title: "关于钻石生命周期的区块链系统",
      excerpt: "笔者的课程项目 (团队），设计一个钻石生命周期的区块链系统",
      link:"",
      linkAlt:"JavaScript Blockchain",
    },
    { title: "招聘网站岗位信息的获取，处理，分析与呈现",
      excerpt: "",
      link:"",
      linkAlt:"Python Blockchain",
    },
    { title: "机器学习方法预测股票涨跌",
      excerpt: "",
      link:"",
      linkAlt:"Python Blockchain",
    },
    { title: "Portfolio",
      excerpt: "",
      link:"",
      linkAlt:"Python",
    },
    { title: "Gatsby 网站",
      excerpt: "",
      link:"",
      linkAlt:"Python",
    },

]
const RepoIndexPage = () => {
  return (
    <Layout>
      <div className="normal-page">
      {
        repoItems.map((item)=>(
          <div className="abstract">
            <h2>{item.title}</h2>
            <excerpt>{item.excerpt}</excerpt>
            <br/>
            <a href={item.link}>{item.linkAlt}</a>
          </div>
        ))
      }
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     allMdx(sort: { frontmatter: { date: DESC }}) {
//       nodes {
//         frontmatter {
//           date(formatString: "MMMM D, YYYY")
//           title
//           slug
//         }
//         id
//         excerpt
//       }
//     }
//   }
// `
export const Head = () => <Seo title="Repository" />

export default RepoIndexPage