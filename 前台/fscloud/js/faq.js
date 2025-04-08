        document.querySelectorAll('.tpm-faq__item-hd').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.closest('.tpm-faq__item');
                const allItems = document.querySelectorAll('.tpm-faq__item');
                
                // 如果当前项已经打开，则关闭它
                if (item.classList.contains('is-open')) {
                    item.classList.remove('is-open');
                } else {
                    // 先关闭所有打开的项
                    allItems.forEach(el => {
                        el.classList.remove('is-open');
                    });
                    // 然后打开当前项
                    item.classList.add('is-open');
                }
            });
        });

        document.querySelectorAll('.tl-tabs__item').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tl-tabs__item-cont').forEach(cont => {
                    cont.classList.remove('is-active');
                });
                tab.querySelector('.tl-tabs__item-cont').classList.add('is-active');
                
                document.querySelectorAll('.tl-tabs__item').forEach(item => {
                    item.classList.remove('is-active');
                });
                tab.classList.add('is-active');
            });
        });