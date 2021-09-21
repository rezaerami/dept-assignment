import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { uiSelectors } from 'ducks/ui';

import { Container } from 'components/Globals';

import {
  StyledMegaMenuWrapper,
  StyledMenuWrapper,
  StyledMenuItem,
  StyledMenuTitle,
  StyledSubMenuWrapper,
  StyledSubMenuItem,
} from './styles';

const MegaMenu = ({ className, menus }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const renderChildren = (children) => (
    <StyledSubMenuWrapper>
      {children.map(({ title, link }) => (
        <StyledSubMenuItem key={title}>
          <Link to={link}>{title}</Link>
        </StyledSubMenuItem>
      ))}
    </StyledSubMenuWrapper>
  );

  return (
    <StyledMegaMenuWrapper className={classNames(className)}>
      <Container>
        <StyledMenuWrapper>
          {menus.map(({ title, link, children = [] }) => (
            <StyledMenuItem key={title}>
              <StyledMenuTitle>
                <Link to={link}>{title}</Link>
              </StyledMenuTitle>
              {!!children.length && renderChildren(children)}
            </StyledMenuItem>
          ))}
        </StyledMenuWrapper>
      </Container>
    </StyledMegaMenuWrapper>
  );
};

MegaMenu.propTypes = {
  className: PropTypes.string,
  menus: PropTypes.array,
};
MegaMenu.defaultProps = {
  className: '',
};

const mapStateToProps = (state) => ({
  menus: uiSelectors.getMenusResults(state),
});

export default connect(mapStateToProps)(MegaMenu);
