const program = require('commander');
const inquirer = require('inquirer');
const pkg = require('../package');

program
    .name('qtnc')
    .usage('[global options] command')
    .version(pkg.version);

program
    .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue');

program
    .command('init')
    .description('初始化一个项目')
    .option('-t, --template <type>', '模板名字')
    .option('-lang, --language <type>', '使用语言')

    .action( async function(options){

        if(!!!options.template) {
            const promptList = [{
                type: 'list',
                message: '请选择模板:',
                name: 'template',
                choices: [
                    'React',
                    'Node',
                    'Vue',
                    'cli'
                ],
                filter: function (val) { // 使用filter将回答变为小写
                    return val.toLowerCase();
                }
            }];

           let c = await inquirer.prompt(promptList).then(function(a) {
                return a.template;
            });

            options.template = c;

        }
        if(!!!options.language) {
            const promptList = [{
                type: 'list',
                message: '请选择编程语言:',
                name: 'language',
                choices: [
                    'Js',
                    'Ts'
                ],
                filter: function (val) { // 使用filter将回答变为小写
                    return val.toLowerCase();
                }
            }];

            let c = await inquirer.prompt(promptList).then(function(a) {
                return a.language;
            });

            options.language = c;
        }
    console.log(`您选择了：\r\n 模板：${options.template}\r\n 编程语言: ${options.language}`);

});

program.parse(process.argv);
