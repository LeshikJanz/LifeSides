// @flow
import React from 'react'
import type { DropdownItem } from 'types/common'
import './styles.scss'
import styled from 'styled-components'

type Props = {
  name: string,
  items: DropdownItem[],
  activeItem: ?DropdownItem,
  placeholder?: string,
  onChange: (name: string, item: DropdownItem) => void,
  tabIndex?: string,
  width?: string,
}

type State = {
  isOpen: boolean,
}

const Wrapper = styled.div`
  position: relative;
  width: ${({ width }) => width ? width + "px" : "auto"};
  height: 40px;
`

const ColorListItem = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 2px;
  border: solid 1px #979797;
  height: 20px;
  width: 20px;
`

class Dropdown extends React.Component<Props, State> {
  dropdownRef: HTMLDivElement

  state = {
    isOpen: false,
  }

  componentDidMount () {
    document.addEventListener('click', this.handleClick)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClick)
  }

  handleClick = (e: { target: any } & Event) => {
    if (!this.dropdownRef.contains(e.target)) {
      this.handleClose()
    }
  }

  handleDropdown = () =>
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))

  handleClose = () => this.setState({ isOpen: false })

  onChange = (item: DropdownItem) => {
    this.handleClose()
    if (this.props.onChange) {
      this.props.onChange(this.props.name, item)
    }
  }

  render () {
    const { items, placeholder, tabIndex, width, activeItem } = this.props
    const { isOpen } = this.state
    return (
      <Wrapper
        innerRef={ref => (this.dropdownRef = ref)}
        width={width}
        className={`dropdown-wrapper ${isOpen ? 'active' : ''}`}
      >
        {
          activeItem && activeItem.type === "color" &&
          <ColorListItem
            className="with-drop-arrow"
            color={activeItem.value}
            onClick={this.handleDropdown}
          />
        }
        <input
          type="text"
          value={activeItem ? (activeItem.type === "color" ? "" : activeItem.value) : undefined}
          tabIndex={tabIndex}
          readOnly
          onClick={this.handleDropdown}
          placeholder={placeholder}
        />
        <ul>
          {
            items.map((item, index) =>
              <li
                key={index}
                onClick={() => this.onChange(item)}
                value={item.value}
              >
                {
                  item.type === "color"
                    ? <ColorListItem className="with-color-title" color={item.value} />
                    : item.title
                }
              </li>
            )
          }
        </ul>
      </Wrapper>
    )
  }
}

export default Dropdown
