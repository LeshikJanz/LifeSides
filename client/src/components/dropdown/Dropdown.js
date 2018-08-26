// @flow
import React from 'react'
import type { DropdownItem } from 'types/common'
import './styles.scss'
import styled from 'styled-components'

type Props = {
  name: string,
  items: DropdownItem[],
  activeItem?: DropdownItem,
  placeholder?: string,
  tabIndex?: number,
  width?: number,
}

type State = {
  isOpen: boolean,
}

const Wrapper = styled.div`
  width: ${({ width }) => width ? width + "px" : "auto"};
  height: 40px;
`

class Dropdown extends React.Component<Props, State> {
  dropdownRef: HTMLDivElement

  state = {
    isOpen: false,
  }

  componentDidMount() {
    document.addEventListener('click', (e) => {
      if (!this.dropdownRef.contains(e.target)) {
        this.handleClose()
      }
    })
  }

  handleDropdown = (e) =>
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))

  handleClose = () => this.setState({ isOpen: false })

  onChange = (item: DropdownItem) => {
    this.handleClose()
    if (this.props.onChange) {
      this.props.onChange(this.props.name, item)
    }
  }

  render() {
    const { items, placeholder, tabIndex, width, activeItem } = this.props
    const { isOpen } = this.state
    return (
      <Wrapper
        innerRef={ref => (this.dropdownRef = ref)}
        width={width}
        className={`dropdown-wrapper ${isOpen ? 'active' : ''}`}
      >
        <input
          type="text"
          value={activeItem ? activeItem.value : undefined}
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
                {item.title}
              </li>
            )
          }
        </ul>
      </Wrapper>
    )
  }
}

export default Dropdown
