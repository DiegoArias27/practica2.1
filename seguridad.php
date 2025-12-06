includes:
    - vendor/nunomaduro/larastan/extension.neon
    parameters:
        path:
            - app
            - config
            - database
        level: 6

        bootsrapFiles:
            - vendor/nunomaduro/larastan/boostrap.php