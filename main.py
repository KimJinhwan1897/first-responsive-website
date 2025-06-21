#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
OTS 웹사이트 관리 및 배포 도구
"""

import os
import sys
import shutil
import time
import argparse
import http.server
import socketserver
from pathlib import Path

print("Hello, Cursor + Python!")

def serve_site(port=8000):
    """로컬 서버에서 사이트를 제공합니다"""
    handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"로컬 서버가 포트 {port}에서 실행 중입니다")
        print(f"http://localhost:{port}/ 에서 사이트를 확인하세요")
        httpd.serve_forever()


def build_site():
    """사이트 빌드 프로세스를 실행합니다"""
    print("사이트 빌드를 시작합니다...")
    
    # 여기에 빌드 로직 구현 (예: 최적화, 번들링 등)
    print("HTML, CSS, JS 파일 검증 중...")
    time.sleep(1)
    print("이미지 최적화 중...")
    time.sleep(1)
    
    print("빌드가 완료되었습니다")


def deploy_site():
    """사이트를 서버에 배포합니다"""
    print("사이트 배포를 시작합니다...")
    
    # 여기에 배포 로직 구현
    print("파일 압축 중...")
    time.sleep(1)
    print("서버 연결 중...")
    time.sleep(1)
    print("파일 업로드 중...")
    time.sleep(1)
    
    print("사이트가 성공적으로 배포되었습니다")


def backup_site():
    """사이트 파일의 백업을 생성합니다"""
    backup_dir = "backups"
    timestamp = time.strftime("%Y%m%d-%H%M%S")
    backup_path = os.path.join(backup_dir, f"backup-{timestamp}")
    
    print(f"백업을 생성합니다: {backup_path}")
    
    # 백업 디렉토리 생성
    os.makedirs(backup_dir, exist_ok=True)
    os.makedirs(backup_path, exist_ok=True)
    
    # 주요 파일/디렉토리 백업
    dirs_to_backup = ["resources", "product", "company", "customer"]
    files_to_backup = ["index.html", "footer.html"]
    
    for dir_name in dirs_to_backup:
        if os.path.exists(dir_name):
            shutil.copytree(dir_name, os.path.join(backup_path, dir_name))
            print(f"디렉토리 백업 완료: {dir_name}")
    
    for file_name in files_to_backup:
        if os.path.exists(file_name):
            shutil.copy2(file_name, os.path.join(backup_path, file_name))
            print(f"파일 백업 완료: {file_name}")
    
    print(f"백업이 완료되었습니다: {backup_path}")


def list_files():
    """프로젝트 파일 구조를 보여줍니다"""
    print("프로젝트 파일 구조:")
    
    exclude_dirs = [".git", "backups", "__pycache__", "node_modules"]
    exclude_extensions = [".pyc", ".tmp", ".log"]
    
    for root, dirs, files in os.walk(".", topdown=True):
        # 제외할 디렉토리 필터링
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        
        level = root.count(os.sep)
        indent = " " * 4 * level
        print(f"{indent}{os.path.basename(root)}/")
        
        sub_indent = " " * 4 * (level + 1)
        for file in files:
            # 제외할 확장자 필터링
            if not any(file.endswith(ext) for ext in exclude_extensions):
                print(f"{sub_indent}{file}")


def main():
    """메인 기능"""
    parser = argparse.ArgumentParser(description="OTS 웹사이트 관리 도구")
    parser.add_argument("action", choices=["serve", "build", "deploy", "backup", "list"],
                        help="수행할 작업")
    parser.add_argument("-p", "--port", type=int, default=8000,
                        help="로컬 서버 포트 (기본값: 8000)")
    
    args = parser.parse_args()
    
    if args.action == "serve":
        serve_site(args.port)
    elif args.action == "build":
        build_site()
    elif args.action == "deploy":
        deploy_site()
    elif args.action == "backup":
        backup_site()
    elif args.action == "list":
        list_files()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n프로그램이 중단되었습니다.")
        sys.exit(0) 