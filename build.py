import os
import shutil

if __name__ == "__main__":
    os.chdir("nextjs-ui")
    # os.system("bun run build")
    os.chdir("..")

    if os.path.exists("web/out"):
        shutil.rmtree("web/out")

    shutil.copytree("nextjs-ui/out", "web/out")
    shutil.copy("web/script.js", "web/out/script.js")

    with open("web/out/index.html", "r") as f:
        content = f.read().strip()

    content = content.replace("<head>", '<head><script type="text/javascript" src="/eel.js"></script><script type="text/javascript" src="/script.js"></script>')

    with open("web/out/index.html", "w") as f:
        f.write(content)
