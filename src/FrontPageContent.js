import React from 'react'
import RenderComponent from './components/table/RenderComponent'
import TwitterFeed from './components/TwitterFeed'

export default function FrontPageContent() {
  return (
    <>
    <div>
      <RenderComponent myUrl = "https://api-football-v1.p.rapidapi.com/v3/standings?league=103&season=2024"/>
    </div>
    <div>
        <TwitterFeed/>
    </div>
    </>
  )
}
