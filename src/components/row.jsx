import React from 'react';
import { Grid, Container, Header, Image, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

// const header = styled.header`
//   color:red;
// `;

const GridExampleRelaxed = () => (
  
  <Container>
    <Container textAlign='left'>
    <Header style={{ margin:'3rem', marginLeft:0 }} size='large'>Large Header</Header>
  </Container>
    <Grid relaxed columns={4}>
    <Grid.Column>
      <Segment style={{ height:'8rem', padding:'3.5rem' }}>1</Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment style={{ height:'8rem', padding:'3.5rem' }}>2</Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment style={{ height:'8rem', padding:'3.5rem' }}>3</Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment style={{ height:'8rem', padding:'3.5rem' }}>4</Segment>
    </Grid.Column>
  </Grid>
  <Grid relaxed columns={4}>
    <Grid.Row>
      <Grid.Column  width={8}>
      <Segment style={{ height:'17rem', padding:'3.5rem', marginTop:'4rem' }} >5</Segment>
      <Grid relaxed columns={2}>
      <Grid.Column width={8}>
      <Segment style={{ height:'8rem', padding:'3.5rem', marginTop:'4rem' }}>sub</Segment>
      </Grid.Column>
      <Grid.Column width={8}>
      <Segment style={{ height:'8rem', padding:'3.5rem', marginTop:'4rem' }}>sub</Segment>
      </Grid.Column>
      </Grid>
      </Grid.Column>
      <Grid.Column width={4}>
      <Segment style={{ height:'30rem', padding:'3.5rem', marginTop:'4rem' }}>6</Segment>
      </Grid.Column>
      <Grid.Column width={4}>
      <Segment style={{ height:'30rem', padding:'3.5rem', marginTop:'4rem' }}>7</Segment>
      </Grid.Column>
    </Grid.Row>
    </Grid>
  </Container>
)

export default GridExampleRelaxed