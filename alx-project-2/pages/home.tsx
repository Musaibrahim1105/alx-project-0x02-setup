import React from 'react'
import Card from '@/components/common/Card'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Card title="Card Title" content="This is the card content." />
      <Card title="Another Card Title" content="This is some more card content." />
      <Card title="Third Card Title" content="This is the third card content." />
    </div>
  )
}

export default Home
