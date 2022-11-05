import { publish } from 'gh-pages';

publish('build', {
        branch: 'gh-pages',
        repo: '.git repo',
        dotfiles: true,
        user: {
            name: 'Tristan Simpson',
            email: 'heytristaann@gmail.com'
        }
    },
    () => { console.log('Github Page Deployed') }
);