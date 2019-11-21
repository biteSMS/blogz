import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from '@/views/Index'
import Articles from '@/views/Articles'
import Header from '@/components/Header'
import '@/assets/less/normalize.less'
import '@/assets/less/global.less'

const App: React.FC = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/article/:name" component={Articles} />
    </Switch>
  </Router>
)

export default App
