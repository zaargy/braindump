#!/usr/bin/env bash

# you don't run docker images without looking at the Dockerfiles first right?
docker run \
  -v "$HOME/.msmtprc:/root/.msmtprc:ro" \
  -v "$HOME/.msmtpqueue:/root/.msmtpqueue" \
zaargy/msmtp msmtp-runqueue.sh
