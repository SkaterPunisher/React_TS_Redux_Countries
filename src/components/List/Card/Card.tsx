import React from 'react';
import { CardProps } from './Card.props';
import { CardBody } from './CardBody';
import { CardImg } from './CardImg';
import { CardList } from './CardList';
import { CardListItem } from './CardListItem';
import { CardTitle } from './CardTitle';
import { WrapperCard } from './WrapperCard';

const Card = ({ img, name, info = [], onClick }: CardProps) => {
  return (
    <WrapperCard onClick={onClick}>
      <CardImg src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((item) => (
            <CardListItem key={item.title}>
              <b>{item.title}:</b> {item.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </WrapperCard>
  );
};

export default Card;
