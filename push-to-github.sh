#!/usr/bin/env bash
# Helper script to push chibuchi-ovunda-portfolio to GitHub

set -e

echo "⚖️  Chibuchi Ovunda Portfolio - GitHub Push Helper"
echo "=================================================="

if [ -z "$1" ]; then
  echo ""
  echo "Usage:"
  echo "  ./push-to-github.sh <your-github-repo-url>"
  echo ""
  echo "Examples:"
  echo "  ./push-to-github.sh https://github.com/username/chibuchi-ovunda-portfolio.git"
  echo "  ./push-to-github.sh git@github.com:username/chibuchi-ovunda-portfolio.git"
  echo ""
  exit 1
fi

REPO_URL="$1"

echo "Setting remote origin to: $REPO_URL"
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

echo "Branch set to main..."
git branch -M main

echo "Pushing code to GitHub..."
git push -u origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo "You can now connect this repo to Vercel (https://vercel.com) for instant automatic deployment."
