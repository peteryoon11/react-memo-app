import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    font-weight: 300;
    font-size: 1.2rem;
`;

const InputPlaceholder = ({onFocus}) => (
    <Wrapper onClick={onFocus}>
        메모를 입력하세요...
    </Wrapper>
);

InputPlaceholder.propTypes = {
    onFocus: PropTypes.func
};

export default InputPlaceholder;