import React, { Component } from 'react'
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';


class Directory extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         sections:[
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              // linkUrl: 'shop/hats'
              linkUrl: 'hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              // linkUrl: 'shop/jackets'
              linkUrl: ''
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              // linkUrl: 'shop/sneakers'
              linkUrl: ''
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              // linkUrl: 'shop/womens'
              linkUrl: ''
            },
            {
              title: 'mens',
              imageUrl: 'https://static1.fashionbeans.com/wp-content/uploads/2016/03/hatguide-19-topp-2.jpg',
              size: 'large',
              id: 5,
              // linkUrl: 'shop/mens'
              linkUrl: ''
            }
          ]
      }
    }
    
  render() {
    return (
      <div className="directory-menu">
        {/* {this.state.sections.map(({title, imageUrl, id, size}) => (
            <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
            />
        ))} */}

            {this.state.sections.map(({id, ...allSectionProps}) => (
            <MenuItem
            key={id}
            {...allSectionProps}
            />
        ))}
      </div>
    )
  }
}

export default Directory
