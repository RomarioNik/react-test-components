import { Component } from 'react';
import { Wrapper, ButtonWrapper, Button, NumbersOfPage, Title } from './Reader.styled';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    index: 0,
  };

  componentDidUpdate(_, prevState) {
    if (this.state.index !== prevState.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  componentDidMount() {
    const savedPage = localStorage.getItem(LS_KEY);
    if (savedPage) {
      this.setState({ index: Number(savedPage) });
    }
  }

  changeIndex = value => {
    const { index } = this.state;
    this.setState({ index: index + value });
  };

  render() {
    const { items } = this.props;
    const { index } = this.state;
    const totalItems = items.length;
    const { title, text } = items[index];

    return (
      <Wrapper>
        <ButtonWrapper>
          <Button type="button" disabled={index === 0} onClick={() => this.changeIndex(-1)}>
            Back
          </Button>
          <Button
            type="button"
            disabled={index === totalItems - 1}
            onClick={() => this.changeIndex(1)}
          >
            Forward
          </Button>
        </ButtonWrapper>

        <NumbersOfPage>
          {index + 1}/{totalItems}
        </NumbersOfPage>

        <article>
          <Title>{title}</Title>
          <p>{text}</p>
        </article>
      </Wrapper>
    );
  }
}
