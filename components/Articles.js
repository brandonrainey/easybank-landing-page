import React from 'react'

export default function Articles() {
  return (
    <div className='articleContainer'>
        <h2>
            Latest Articles
        </h2>

        <div className='articleWrapper'>
            <img 
                src='/image-currency.jpg'
                width={`100%`}
                className='articleImage'
            />
            <div className='articleInfo'>
                <p className='articleAuthor'>
                    By Claire Robinson
                </p>
                <h3>
                    Recveive money in any currency with no fees
                </h3>
                <p>
                    The world is getting smaller and were becoming more mobile.
                    So why should you be forced to only receive money in a single ...
                </p>
            </div>
        </div>

        <div className='articleWrapper'>
            <img 
                src='/image-restaurant.jpg'
                width={`100%`}
                className='articleImage'
            />
            <div className='articleInfo'>
                <p className='articleAuthor'>
                    By Wilson Hutton
                </p>
                <h3>
                    Treat yourself without worrying about money
                </h3>
                <p>
                    Our simple budgeting feature allows you to separate out your
                    spending and set realistic limits each month. That means you ...
                </p>
            </div>
        </div>

        <div className='articleWrapper'>
            <img 
                src='/image-plane.jpg'
                width={`100%`}
                className='articleImage'
            />
            <div className='articleInfo'>
                <p className='articleAuthor'>
                    By Wilson Hutton
                </p>
                <h3>
                    Take your Easybank card wherever you go
                </h3>
                <p>
                    We want you to enjoy your travels. This is why we dont charge any fees
                    on purchases while youre abroad. Well even show you ...
                </p>
            </div>

            
        </div>

        <div className='articleWrapper'>
            <img 
                src='/image-confetti.jpg'
                width={`100%`}
                className='articleImage'
            />
            <div className='articleInfo'>
                <p className='articleAuthor'>
                    By Claire Robinson
                </p>
                <h3>
                    Our invite-only Beta accounts are now live!
                </h3>
                <p>
                    After a lot of hard work by the whole team, were excited to launch our 
                    closed beta. Its easy to request an invite through the site ...
                </p>
            </div>
        </div>
    </div>
  )
}
