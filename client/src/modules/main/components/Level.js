import type { Lifeside } from "types/Lifeside";
import React from "react";
import { connect } from "react-redux";
import { selectLifesideRequested } from "components/popups/createLifeside/actions";
import "../styles/level.scss";

type Props = {
  name: string,
  level: string,
  lifesides: Lifeside[],
  selectLifesideRequested: () => void
};

type State = {
  isOpen: boolean
};

class Level extends React.Component<Props, State> {
  state = {
    isOpen: false
  };

  onDropdownChange = (lifesideId: string) =>
    this.props.selectLifesideRequested(lifesideId);

  handleOpen = () => this.setState({ isOpen: true });

  onMouseLeave = () => this.setState({ isOpen: false });

  render() {
    const { selectedLifeside, lifesides } = this.props;
    const { isOpen } = this.state;
    if (!selectedLifeside) return null;
    const currentLevel =
      selectedLifeside.habits &&
      selectedLifeside.habits.filter(habit => habit.isCompleted).length;
    return (
      <div
        className="level-wrapper"
        onMouseOver={this.handleOpen}
        onMouseLeave={this.onMouseLeave}
      >
        <div className="level-dropdown-btn">
          <span>{selectedLifeside.name}</span>
          {!!lifesides.length && (
            <span className={`arrow-down ${isOpen ? "active" : ""}`} />
          )}
        </div>
        <hr />
        <span>{currentLevel} уровень</span>
        {isOpen && (
          <ul className="level-dropdown-list">
            {lifesides.map(lifeside => (
              <li
                key={lifeside.id}
                onClick={() => this.onDropdownChange(lifeside.id)}
                value={lifeside.id}
              >
                {lifeside.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default connect(
  ({ lifeside }) => ({
    lifesides: lifeside.list.filter(
      ls => ls.id !== (lifeside.selected && lifeside.selected.id)
    ),
    selectedLifeside: lifeside.selected
  }),
  { selectLifesideRequested }
)(Level);
