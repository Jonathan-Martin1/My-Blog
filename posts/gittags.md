---
title: Git Tags with Reference
date: '2021-09-20'
excerpt: 'Git Tags are very useful to delete or verify a tag object signed with GPG.'
cover_image: '/images/posts/img1.jpg'
---

# What are Git Tags with Reference?

> git-tag - Create, list, delete or verify a tag object signed with GPG

> git tag [-a | -s | -u <keyid>] [-f] [-m <msg> | -F <file>] [-e]

> git tag [-n[<num>]] -l [--contains <commit>] > [--no-contains <commit>] > [--points-at <object>] [--column[=<options>] | --no-column][--create-reflog] [--sort=<key>] [--format=<format>] [--merged <commit>] [--no-merged <commit>] [<pattern>…​]

git tag -v [--format=<format>] <tagname>…​

## Description

- Add a tag reference in refs/tags/, unless -d/-l/-v is given to delete, list or verify tags.

- Unless -f is given, the named tag must not yet exist.

- If one of -a, -s, or -u <keyid> is passed, the command creates a tag object, and requires a tag message. Unless -m <msg> or -F <file> is given, an editor is started for the user to type in the tag message.

- If -m <msg> or -F <file> is given and -a, -s, and -u <keyid> are absent, -a is implied.

- Otherwise, a tag reference that points directly at the given object (i.e., a lightweight tag) is created.

- A GnuPG signed tag object will be created when -s or -u <keyid> is used. When -u <keyid> is not used, the committer identity for the current user is used to find the GnuPG key for signing. The configuration variable gpg.program is used to specify custom GnuPG binary.

- Tag objects (created with -a, -s, or -u) are called "annotated" tags; they contain a creation date, the tagger name and e-mail, a tagging message, and an optional GnuPG signature. Whereas a "lightweight" tag is simply a name for an object (usually a commit object).

- Annotated tags are meant for release while lightweight tags are meant for private or temporary object labels. For this reason, some git commands for naming objects (like git describe) will ignore lightweight tags by default.

## Config

- By default, git tag in sign-with-default mode (-s) will use your committer identity (of the form Your Name <your@email.address>) to find a key. If you want to use a different default key, you can specify it in the repository configuration as follows:

> [user]
>
> > signingKey = '<'gpg-keyid'>' (minus the quotes)

## Re-tagging

What should you do when you tag a wrong commit and you would want to re-tag?

If you never pushed anything out, just re-tag it. Use "-f" to replace the old one. And you’re done.

But if you have pushed things out (or others could just read your repository directly), then others will have already seen the old tag. In that case you can do one of two things:

- The sane thing. Just admit you screwed up, and use a different name. Others have already seen one tag-name, and if you keep the same name, you may be in the situation that two people both have "version X", but they actually have different "X"'s. So just call it "X.1" and be done with it.

- The insane thing. You really want to call the new version "X" too, even though others have already seen the old one. So just use git tag -f again, as if you hadn’t already published the old one.

However, Git does not (and it should not) change tags behind users back. So if somebody already got the old tag, doing a git pull on your tree shouldn’t just make them overwrite the old one.

If somebody got a release tag from you, you cannot just change the tag for them by updating your own one. This is a big security issue, in that people MUST be able to trust their tag-names. If you really want to do the insane thing, you need to just fess up to it, and tell people that you messed up.

### Example

Ok, I messed up, and I pushed out an earlier version tagged as X. I
then fixed something, and retagged the _fixed_ tree as X again.
If you got the wrong tag, and want the new one, please delete
the old one and fetch the new one by doing:

> - git tag -d X

> - git fetch origin tag X

to get my updated tag.

You can test which tag you have by doing

> - git rev-parse X

which should return 0123456789abcdef.. if you have the new version.

### <a href="https://git-scm.com/docs/git-tag" target="_blank">Documentation Here</a>
