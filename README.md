# Braindump

![BrainDump](client/build/icon.png)

Braindump is a distraction-free ever-rotating text editor I use for journaling.
It replaces a vim version!

## How it works

At the moment, it simply writes files to `~/.msmtpqueue`. From crontab, I run
`mailer-cron.sh` from crontab and what I wrote is emailed to me once I'm online.

You will need to set the `MY_EMAIL` environment variable to an email address you want MSMTP
to email to. The email subject is hard-coded to Journal at the moment.

I use it on OS X and Linux.

It does seem a bit silly to use Electron for this but I wanted something that works
consistently across OS X and Linux. Rewrite in Golang/Rust?

Something more self-contained could be good but `msmtp` does work well...

# Building

`npm run-script dist`
