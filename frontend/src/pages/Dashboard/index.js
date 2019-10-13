import React from 'react';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {

  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft color="#fff" size={36} />
        </button>
        <strong>31 de hoje</strong>
        <button type="button">
          <MdChevronRight color="#fff" size={36} />
        </button>
      </header>

      <ul>
        <Time available>
          <strong>@4de agora</strong>
          <span>Da de eu</span>
        </Time>
        <Time>
          <strong>@4de agora</strong>
          <span>Da de eu</span>
        </Time>
        <Time past>
          <strong>@4de agora</strong>
          <span>Da de eu</span>
        </Time>
      </ul>
    </Container>
  );
}
