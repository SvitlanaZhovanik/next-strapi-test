import React, { useState } from "react"
import Layout from "../components/layout"
import { fetchAPI } from "../lib/api"
import axios from "axios"

const Form = ({ categories }) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const res = async () => {
      await axios
        .post("http://localhost:1337/api/forms", {
          data: {
            email: email,
            name: name,
          },
        })
        .catch((err) => console.log(err))
    }
    res()
  }

  return (
    <Layout categories={categories}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export async function getStaticProps() {
  const categoriesRes = await fetchAPI("/categories", { populate: "*" })

  return {
    props: {
      categories: categoriesRes.data,
    },
    revalidate: 1,
  }
}
export default Form
