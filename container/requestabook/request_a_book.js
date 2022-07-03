import { Button } from '@mui/material';
import { Container } from 'react-bootstrap';
import {
  Ginput,
  H4
} from '../../components';
import styled from './requestBook.module.scss';

function RequestABook() {
  return (
    <Container fluid>
      <Container>
        <div className="block_title title ">
          <H4
            text={'Request for  a Book'}
          />
        </div>
        <div
          className={`styled.RequestABook app__flex`}
        >
          <div className={styled.imgs}>
            <h1> Get every books </h1>
            <h1> you want </h1>
            <h1>
              Just type your books Name
            </h1>
            <h1> here </h1>
            <h1>
            
              book as soon as possiple
            </h1>
          </div>
          <div
            className={` ${styled.RequestABook}`}
          >
            <H4
              text={
                'Request for  a books'
              }
            />
            <form>
              <div
                className={`app__flex ${styled.input}`}
              >
                <Ginput
                  label={'First name'}
                />{' '}
                <Ginput
                  label={'Last Name'}
                />
              </div>

              <div
                className={
                  styled.book_name
                }
              >
                <Ginput
                  label={'Book Name'}
                />
              </div>
              <div
                className={
                  styled.book_name
                }
              >
                <Ginput
                  label={'Email'}
                  type={'email'}
                  placehoder={
                    'example@.gmail.com'
                  }
                />
              </div>
              <div
                className={
                  styled.book_name
                }
              >
                <Ginput
                  label={'Password'}
                  type={'password'}
                  placehoder={
                    'Type a password'
                  }
                />
              </div>

              {/* <Button className={`btn bg-primary outline`}>  hello</Button> */}
              <Button
                style={{
                  borderRadius: '10px',
                  backgroundColor:
                    '#21b6ae',
                  width: '100%',

                  fontSize: '18px',
                }}
                variant="solid"
                color="primary"
              >
                {' '}
                solid
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default RequestABook;
