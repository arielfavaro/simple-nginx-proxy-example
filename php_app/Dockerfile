FROM php:7.4-fpm-alpine

# Use the default development configuration
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

# TODO install opcache, libs

WORKDIR /var/www/html

COPY . .

EXPOSE 9000

CMD ["php-fpm"]