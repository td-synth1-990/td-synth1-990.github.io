document.addEventListener('DOMContentLoaded', function() {
    // 投稿のフィルタリング関数（カテゴリ）
    function filterPosts(category) {
        const posts = document.querySelectorAll('.blog-post');
        posts.forEach(post => {
            if (category === 'all' || post.getAttribute('data-category') === category) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // 投稿の月別フィルタリング関数
    function filterPostsByMonth(month) {
        const posts = document.querySelectorAll('.blog-post');
        posts.forEach(post => {
            if (month === 'all' || post.getAttribute('data-month') === month) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // 投稿の日付順ソート関数
    function sortPosts(order) {
        const container = document.getElementById('blog-container');
        const posts = Array.from(container.getElementsByClassName('blog-post'));

        posts.sort((a, b) => {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return order === 'asc' ? dateA - dateB : dateB - dateA;
        });

        posts.forEach(post => container.appendChild(post));
    }

    // ボタンのイベントリスナーを設定
    document.querySelector('.blog-filters').addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            const action = e.target.textContent;
            if (action.includes('年')) {
                const month = e.target.getAttribute('onclick').match(/'(\d{4}-\d{2})'/)[1];
                filterPostsByMonth(month);
            } else if (action.includes('日付順')) {
                sortPosts(action.includes('古い順') ? 'asc' : 'desc');
            } else {
                const category = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
                filterPosts(category);
            }
        }
    });
});
