import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulDailyRide(
        sort: { fields: [createdAt], order: DESC }
        limit: 1
      ) {
        edges {
          node {
            dayOfTheWeek
            description
            createdAt(locale: "en-au")
            muxVideo {
              mux {
                playbackId
                ready
              }
            }
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName
