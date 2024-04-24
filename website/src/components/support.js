import { useCallback, useState } from 'react';
import cx from 'classnames';
import { Button } from '../components/button';

export const Support = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasReceived, setHasReceived] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honey, setHoney] = useState('');

  const handleSubmit = useCallback(async () => {
    if (honey !== '') return;
    if (hasReceived) return;

    setHasSubmitted(true);

    const data = {
      name,
      email,
      message,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/contact';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      setHasReceived(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  }, [name, email, message, hasReceived, honey]);

  return (
    <>
      <div className="flex">
        <div className="w-1/3 border-r border-gray-200 pr-8 dark:border-gray-800">
          <div className="text-2xl font-bold leading-tight text-gray-350 dark:text-gray-200 lg:text-3xl">
            自助服务
          </div>
          <div className="text-base">查看这些有用的资源。</div>
          <div className="mt-4 flex flex-col gap-4">
            <Button
              to="https://egghead.io/courses/manage-application-state-with-jotai-atoms-2c3a29f0"
              className="w-full dark:!bg-gray-950 dark:hover:!bg-teal-950"
              bold
              external
            >
             视频教程，使用 Jotai 管理应用状态
              <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 overflow-hidden rounded bg-gray-800 px-1.5 pt-[4px] pb-[3px] text-xs font-semibold uppercase leading-none text-white dark:bg-gray-200 dark:text-black">
                免费
              </div>
            </Button>
            <Button
              to="https://daishi.gumroad.com/l/learn-jotai/website_qpiwdj8"
              className="w-full dark:!bg-gray-950 dark:hover:!bg-teal-950"
              bold
              external
            >
              学习简化的 Jotai
            </Button>
            <Button
              to="https://daishi.gumroad.com/l/philosophy-of-jotai-1"
              className="w-full dark:!bg-gray-950 dark:hover:!bg-teal-950"
              bold
              external
            >
              Jotai 的哲学：第一部分
            </Button>
          </div>
        </div>
        <div className="relative w-2/3 pl-8">
          <div>
            <div className="text-2xl font-bold leading-tight text-gray-350 dark:text-gray-200 lg:text-3xl">
              专业支持
            </div>
            <div className="text-base">
              需要更多帮助？请求来自 Jotai 作者 Daishi Kato 的专家代码架构审查。
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <label>
                <div>姓名</div>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.currentTarget.value)}
                  className="form-input w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-lg focus-within:ring focus-within:ring-blue-400 dark:border-gray-800 dark:bg-gray-950 dark:focus-within:ring-teal-700"
                  required
                />
              </label>
              <label>
                <div>电子邮件</div>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                  className="form-input w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-lg focus-within:ring focus-within:ring-blue-400 dark:border-gray-800 dark:bg-gray-950 dark:focus-within:ring-teal-700"
                  required
                />
              </label>
              <label>
                <div>消息</div>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.currentTarget.value)}
                  rows={5}
                  className="form-input w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-lg focus-within:ring focus-within:ring-blue-400 dark:border-gray-800 dark:bg-gray-950 dark:focus-within:ring-teal-700"
                />
              </label>
              <label className="sr-only">
                <div>如果你是人类，请不要填写这个：</div>
                <input
                  type="text"
                  value={honey}
                  onChange={(event) => setHoney(event.currentTarget.value)}
                />
              </label>
              <div className={cx(hasSubmitted && 'opacity-0')}>
                <Button icon="message" onClick={handleSubmit} dark bold className="dark:!bg-black">
                  发送询问
                </Button>
              </div>
            </div>
          </div>
          {hasSubmitted && (
            <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-gray-100 text-3xl font-bold leading-tight text-gray-350 dark:bg-gray-900 dark:text-gray-200 lg:text-4xl">
              {hasReceived ? <span>谢谢！</span> : <span>发送中...</span>}
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="mt-8 flex items-center gap-6">
          <a
            href="https://twitter.com/dai_shi"
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0"
          >
            <img
              src="https://cdn.candycode.com/jotai/daishi.png"
              className="aspect-square h-28 w-28 rounded-full border border-gray-300 bg-white dark:border-gray-800 dark:bg-black"
              alt="Daishi Kato"
            />
          </a>
          <div className="text-sm leading-tight">
            <span className="font-bold">Daishi Kato</span> 是一位对开源软件充满热情的软件工程师。他已经是对等网络和网络技术的研究者几十年了。他对工程学有兴趣，并且在过去的5年里一直在与初创公司合作。他自90年代以来一直积极参与开源软件的工作，他的最新工作集中在使用 JavaScript 和 React 开发各种库。
          </div>
        </div>
      </div>
    </>
  );
};
