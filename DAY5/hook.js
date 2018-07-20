function comment_process(){
    hook.call('COMMENT_BEFORE', args);
    Insert to database
    hook.call('COMMENT_AFTER', args);
}

function register_action(type, action_name){
    list[type].append(action_name);
}

hook.register_action('COMMENT_AFTER', 'send_to_commenter');
hook.register_action('COMMENT_AFTER', 'send_to_host');

function call(type, args){
    for each_one in list[type]{
        each_one(args);
    }
}