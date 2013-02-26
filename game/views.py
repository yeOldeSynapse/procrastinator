import random
from django.shortcuts import render_to_response

from game.models import Girl, Fact


def game(request):
    girl = random.choice(Girl.objects.all())
    fact = random.choice(Fact.objects.all())

    try:
        diff = request.POST['diff']
    except KeyError:
        diff = "easy"

    return render_to_response("game/game.html", {'girl': girl, 'fact': fact,
        'diff': diff})
