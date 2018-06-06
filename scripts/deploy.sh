#!/usr/bin/env bash -x

mkdir -p ~/.aliyun

cat <<EOS > ~/.aliyun/config.json
{
    "current": "default",
    "meta_path": "",
    "profiles": [
        {
            "access_key_id": "${ACCESS_KEY_ID}",
            "access_key_secret": "${ACCESS_KEY_SECRET}",
            "expired_seconds": 0,
            "key_pair_name": "",
            "language": "en",
            "mode": "AK",
            "name": "default",
            "output_format": "json",
            "private_key": "",
            "ram_role_arn": "",
            "ram_role_name": "",
            "ram_session_name": "",
            "region_id": "ap-northeast-1",
            "retry_count": 0,
            "retry_timeout": 0,
            "site": "",
            "sts_token": "",
            "verified": ""
        }
    ]
}
EOS

aliyun oss cp build oss://image-search-demo3/ --recursive --force
