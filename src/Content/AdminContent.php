<?php

/*
 * This file is part of blomstra/horizon.
 *
 * Copyright (c) Bokt.
 * Copyright (c) Blomstra Ltd.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Blomstra\Horizon\Content;

use Blomstra\Redis\Overrides\RedisManager;
use Flarum\Frontend\Document;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;

class AdminContent
{
    /**
     * @var RedisManager
     */
    protected $redis;

    public function __construct(RedisManager $redis)
    {
        $this->redis = $redis;
    }

    public function __invoke(Document $document, ServerRequestInterface $request): void
    {
        $document->payload['redisVersion'] = $this->getRedisVersion();
    }

    protected function getRedisVersion(): string
    {
        $info = $this->redis->connection()->info();

        return Arr::get($info, 'Server.redis_version', 'unknown');
    }
}
