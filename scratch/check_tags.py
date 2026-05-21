import re

with open("src/app/generate/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Let's parse all tags inside PAGE 6B (from line 1062 onwards)
lines = content.splitlines()
page_6b_content = "\n".join(lines[1061:1571])

# Regex to find HTML tags
tags = re.findall(r"<(/?[a-zA-Z0-9_-]+)(?:\s+[^>]*?)?/?>", page_6b_content)

stack = []
for tag in tags:
    if tag.endswith("/"):
        # self-closing tag
        continue
    # Some tags are self-closing in next/image or input
    if tag in ["img", "input", "Image", "hr", "br"]:
        continue
    if tag.startswith("/"):
        close_tag = tag[1:]
        if stack and stack[-1] == close_tag:
            stack.pop()
        else:
            print(f"Mismatched closing tag: </{close_tag}>, stack: {stack}")
    else:
        stack.append(tag)

print("Remaining open tags in stack:", stack)
