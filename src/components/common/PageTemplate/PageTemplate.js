import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageTemplate = () => (
    <div className={cx('page-template')}>
        pageTemplate
    </div>
);

export default PageTemplate;