import pathlib, datetime

RECOMM = pathlib.Path("optimization-journey/06-recommendations.md")
LESSONS = pathlib.Path("optimization-journey/12-lessons.md")

today = datetime.date.today().isoformat()
text = RECOMM.read_text().splitlines()
top5 = [l for l in text if l.startswith("- ")][:5]

out = ["# Lições Chave (auto-gerado)\n", f"> Atualizado em {today}\n", *top5]
LESSONS.write_text("\n".join(out))
print("Gerado 12-lessons.md")
