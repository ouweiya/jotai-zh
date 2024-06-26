import cx from 'classnames';
import { Link } from 'gatsby';
import { Logo } from '../components/logo.js';

export const Jotai = ({ isDocsPage = false, small = false, ...rest }) => {
  return (
    <div {...rest}>
      <Headline mainTitle={!isDocsPage}>
        <Link to="/" className="inline-block rounded-lg focus:ring-offset-4">
          <Logo
            className={cx(
              isDocsPage
                ? 'text-gray-700 transition duration-300 ease-in-out hover:text-black dark:text-gray-200 dark:hover:text-white '
                : 'text-black dark:text-white',
              !small ? 'w-full max-w-[12rem] lg:max-w-[16rem] 2xl:max-w-[18rem]' : 'w-[4rem]',
            )}
          />
        </Link>
        <span className="sr-only">Jotai</span>
      </Headline>
      <div
        className={cx(
          !small
            ? 'mt-2 space-x-6 text-gray-600 lg:space-x-4 2xl:mt-6 2xl:space-x-6 dark:text-gray-200'
            : 'mt-1 space-x-2 text-gray-600 dark:text-gray-500',
          'flex items-center',
        )}
      >
        <div className={cx(!small ? 'text-lg 2xl:text-xl' : 'text-xs', 'whitespace-nowrap')}>
        Jotai
        </div>
        <div
          className={cx(!small ? 'text-sm leading-snug 2xl:text-base' : 'text-xs leading-tight')}
        >
          React 原始而灵活的状态管理
        </div>
      </div>
    </div>
  );
};

const Headline = ({ mainTitle = false, children, ...rest }) => {
  return mainTitle ? <h1 {...rest}>{children}</h1> : <h2 {...rest}>{children}</h2>;
};
