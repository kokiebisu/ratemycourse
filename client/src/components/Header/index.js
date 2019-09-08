import React from 'react';
import './header.scss';
import { Autocomplete, TextInput } from 'evergreen-ui';

export default function Header() {
  return (
    <>
      <section className="header__container">
        <div className="headerboard__container">
          <div className="headerboard">
            <h3 className="headerboard__heading">
              Learn about the course. <br />
              Don't waste your time.
            </h3>
            <Autocomplete
              title="Suggestion"
              onChange={changedItem => console.log(changedItem)}
              items={[
                'Computer Systems Technology',
                'Computer Information Technology'
              ]}
              itemSize={45}
            >
              {props => {
                const { getInputProps, getRef, inputValue, openMenu } = props;
                return (
                  <TextInput
                    placeholder="Program"
                    value={inputValue}
                    innerRef={getRef}
                    height={50}
                    width="100%"
                    marginBottom={30}
                    disabled
                    {...getInputProps({
                      onFocus: () => {
                        openMenu();
                      }
                    })}
                  />
                );
              }}
            </Autocomplete>

            <Autocomplete
              title="Suggestion"
              onChange={changedItem => console.log(changedItem)}
              items={['Object Oriented Programming 2', 'Relational Database']}
              itemSize={45}
            >
              {props => {
                const { getInputProps, getRef, inputValue, openMenu } = props;
                return (
                  <TextInput
                    placeholder="Course"
                    value={inputValue}
                    innerRef={getRef}
                    height={50}
                    marginBottom={50}
                    width="100%"
                    {...getInputProps({
                      onFocus: () => {
                        openMenu();
                      }
                    })}
                  />
                );
              }}
            </Autocomplete>
            <button className="headerboard__button">Search</button>
          </div>
        </div>
      </section>
    </>
  );
}
