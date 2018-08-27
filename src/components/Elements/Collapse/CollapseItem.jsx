import React from 'react'
import { Collapse } from 'reactstrap'

import Button from '../Button'

const CollapseItem = ({ title, children, isOpen = false, onClick }) => (
  <div className={`collapse-item ${isOpen ? 'collapse-item--opened' : ''}`}>
    <Button className="collapse-item__button" onClick={onClick}>
      {title}
    </Button>
    <Collapse isOpen={isOpen}>
      <p className="collapse-item__content" dangerouslySetInnerHTML={{ __html: children }} />
    </Collapse>
  </div>
)

export default CollapseItem
