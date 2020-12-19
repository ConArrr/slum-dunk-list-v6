// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'

const SchoolList: FC = () => (
  <>
    <h2>登場人物</h2>
    <List as="ul">
      <List.Item as="li" key="all">
        <Link to="/characters">全校の選手（身長順）</Link>
      </List.Item>
    </List>
  </>
)

export default SchoolList
